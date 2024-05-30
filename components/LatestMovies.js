

import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BASE_URL = 'https://moviereviews-1.onrender.com';

const MovieItem = React.memo(({ item, onReviewPress, onTrailerPress }) => {
    return (
        <View style={styles.AllLatestMovies}>
            <Image source={{ uri: item.imageUrl }} style={styles.moviePic} />
            <View style={styles.overlay}>
                <TouchableOpacity onPress={onReviewPress}>
                    <View style={styles.reviewButton}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Review</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onTrailerPress}>
                    <View style={styles.reviewButton}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Trailer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export function LatestMovies() {
    const [latestMovies, setLatestMovies] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const navigation = useNavigation();

    const HandlePress = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/movies`);
            const data = await response.json();
            setLatestMovies(data);
            setIsDataLoaded(true);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = useCallback(({ item }) => (
        <MovieItem 
            item={item} 
            onReviewPress={() => navigation.navigate("Review", { movie: item })} 
            onTrailerPress={() => HandlePress(item.trailerUrl)} 
        />
    ), [navigation]);

    const keyExtractor = useCallback((item) => item.id.toString(), []);

    return (
        <View style={styles.containerLM}>
            <Text style={styles.lmtext}>Latest Movies</Text>
            {isDataLoaded ? (
                <FlatList
                    data={latestMovies}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    style={{ android: { overflow: 'hidden' } }}
                    getItemLayout={(data, index) => (
                        { length: 300, offset: 300 * index, index }
                    )}
                />
            ) : (
                <ActivityIndicator size='large' color="white" />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerLM: {
        flexDirection: "column",
        marginTop: 0,
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 30,
    },
    lmtext: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    AllLatestMovies: {
        marginTop: 20,
    },
    moviePic: {
        width: 375,
        height: 300,
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        top: 260,
        right: 35,
        flexDirection: "row",
        gap: 10,
    },
    reviewButton: {
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default LatestMovies;
