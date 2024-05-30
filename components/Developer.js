import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Link from 'react-native-vector-icons/FontAwesome5'
import Mail from 'react-native-vector-icons/Ionicons';
import AccordionItem from './AccordionItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import emailjs from 'emailjs-com';

function Developer() 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [need, setNeed] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        need: '',
    });

    const handlePress = async (url) => {
        const support = await Linking.canOpenURL(url);
        if (support) {
            await Linking.openURL(url);
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleBlur = (field) => {
        if (field === 'name' && !name) {
            setErrors((prevErrors) => ({ ...prevErrors, name: 'Username must be present.' }));
        } else if (field === 'email') {
            if (!email) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Email must be present.' }));
            } else if (!validateEmail(email)) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format.' }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
            }
        } else if (field === 'subject' && !subject) {
            setErrors((prevErrors) => ({ ...prevErrors, subject: 'Subject must be present.' }));
        } else if (field === 'need' && !need) {
            setErrors((prevErrors) => ({ ...prevErrors, need: 'Need must be present.' }));
        }
    };

    const handleSubmit = () => 
    {
        let isValid = true;
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Username must be present.';
            isValid = false;
        }

        if (!email) {
            newErrors.email = 'Email must be present.';
            isValid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format.';
            isValid = false;
        }

        if (!subject) {
            newErrors.subject = 'Subject must be present.';
            isValid = false;
        }

        if (!need) {
            newErrors.need = 'Need must be present.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) 
        {
            const templateParams = {
                name,
                email,
                subject,
                need
            };

          
            emailjs.send('service_mvfwrop', 'template_t9q4pvp', templateParams, '6bQEuTgQ23-x2VtcX')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Submitted successfully');
                }, (error) => {
                    alert('Failed to submit');
                });
                setName("");
                setEmail("");
                setSubject("");
                setNeed("");
        }   
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
        >
            <View style={styles.userlogo}>
                <Text><Icon name="user" size={200} color="green" /></Text>
            </View>
            <View style={styles.username}>
                <Text style={styles.usernameText}>Bapanapalli Gopi</Text>
            </View>
            <View style={styles.aboutMe}>
                <AccordionItem title="About Me">
                    <Text style={styles.aboutMeText}>
                        Holding a Bachelor of Technology degree in Information Technology with a commendable CGPA of 7.91, I am dedicated to academic excellence and practical application. My experience extends beyond traditional coursework, including the development of user-friendly interfaces such as a Student Exam Results Portal and the creation of robust backend systems using Spring Boot and microservices architecture. Proficient in front-end technologies like React.js and skilled in backend tools such as Redis and Kafka, I am also adept at using React Native for cross-platform app development. I am prepared to tackle diverse IT challenges and contribute significantly to organizational success.
                    </Text>
                </AccordionItem>
            </View>
            <View style={styles.contactMe}>
                <Text style={styles.contactMeText}>Contact Me</Text>
                <View style={styles.contactMeForm}>
                    <TextInput
                        placeholder="Enter Your Name..."
                        style={styles.input}
                        cursorColor="white"
                        placeholderTextColor="white"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        onBlur={() => handleBlur('name')}
                    />
                    {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

                    <TextInput
                        placeholder="Enter Your Email..."
                        style={styles.input}
                        cursorColor="white"
                        placeholderTextColor="white"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        onBlur={() => handleBlur('email')}
                    />
                    {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

                    <TextInput
                        placeholder="Enter Your Subject..."
                        style={styles.input}
                        cursorColor="white"
                        placeholderTextColor="white"
                        value={subject}
                        onChangeText={(text) => setSubject(text)}
                        onBlur={() => handleBlur('subject')}
                    />
                    {errors.subject ? <Text style={styles.errorText}>{errors.subject}</Text> : null}

                    <TextInput
                        placeholder="Enter Your Need..."
                        multiline
                        style={styles.inputMultiLine}
                        placeholderTextColor="white"
                        value={need}
                        onChangeText={(text) => setNeed(text)}
                        onBlur={() => handleBlur('need')}
                    />
                    {errors.need ? <Text style={styles.errorText}>{errors.need}</Text> : null}
                </View>
                <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit}>
                    <Text style={styles.submitButton}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.touchContainer}>
                <TouchableOpacity onPress={() => handlePress("https://www.instagram.com/direct/inbox/?hl=en")}>
                    <Icon name="instagram" color="white" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXSpJCccKmNxCtPsSnRwRMknsdZWWVlFvgNtNrdKGVBVGtXClBwbdPjhvgBkpjbsnTksv")}>
                    <Mail name="mail" color="white" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("https://github.com/bapanapalligopi")}>
                    <Icon name="github" color="white" size={30} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handlePress("https://myportfolio1703.netlify.app/")} style={{alignItems:"center",marginTop:10,marginBottom:10,}}>
                    <Text style={{color:"green"}} >Visit My portofolio</Text>
                </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export default Developer;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#1e1e1e",
        paddingBottom: 20
    },
    userlogo: {
        alignItems: "center"
    },
    username: {
        alignItems: "center"
    },
    usernameText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
    },
    aboutMe: {
        padding: 10,
    },
    aboutMeText: {
        textAlign: "justify",
        color: "white"
    },
    contactMe: {
        alignItems: 'center'
    },
    contactMeText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    contactMeForm: {
        marginTop: 20,
    },
    input: {
        padding: 10,
        width: 380,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#4d4d4d",
        borderRadius: 10,
        marginBottom: 10,
        color: 'white'
    },
    inputMultiLine: {
        padding: 10,
        minHeight: 200,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#4d4d4d",
        borderRadius: 10,
        marginBottom: 10,
        textAlignVertical: 'top',
        color: 'white'
    },
    submitContainer: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: "green",
        width: 200,
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    submitButton: {
        alignItems: "center",
        color: "white"
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 10
    },
    touchContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginBottom: 20,
    }
});
