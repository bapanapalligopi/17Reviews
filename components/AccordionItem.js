import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={20}

        color={isOpen?'red':"green"}
         />
      </TouchableOpacity>
      {isOpen && <View style={styles.accordionContent}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionItem: {
    width:"100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#4d4d4d',
    borderRadius:10,
    padding:10,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 10,
    backgroundColor: '#1e1e1e',
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  },
  accordionContent: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    
  },
});

export default AccordionItem;
