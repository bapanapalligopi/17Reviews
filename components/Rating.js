import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rating = ({ rating, maxRating = 5 }) => {
  // Create an array with the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - filledStars - halfStar;

  return (
    <View style={styles.ratingContainer}>
      {Array(filledStars).fill().map((_, index) => (
        <Icon key={`filled-${index}`} name="star" style={styles.star} />
      ))}
      {halfStar === 1 && (
        <Icon key="half" name="star-half" style={styles.star} />
      )}
      {Array(emptyStars).fill().map((_, index) => (
        <Icon key={`empty-${index}`} name="star-o" style={styles.star} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    fontSize: 20,
    color: '#FFD700', // Gold color
    marginHorizontal: 2,
  },
});

export default Rating;
