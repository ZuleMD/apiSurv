import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
 
const InspectionsHistoryScreen = ({ route, navigation }) => {
    const { InspectionsHistoryData } = route.params;


    
    if (!InspectionsHistoryData || InspectionsHistoryData.length === 0) {
        return (
            <View style={[styles.container, styles.centeredView]}>
                <Image
                    source={require('../../assets/notfound.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.centeredText}>Aucune inspection n'a été ajoutée pour le moment.</Text>
            </View>
        );
    }

    const lastItemIndex = InspectionsHistoryData.length - 1;


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historique des inspections</Text>

            <ScrollView horizontal={true}>
                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerCell}>Inspecteur</Text>
                        <Text style={styles.headerCell}>Date et Heure</Text>

                    </View>
                    <FlatList
                        data={InspectionsHistoryData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={[
                                    styles.tableRow,
                                    index === lastItemIndex ? styles.lastTableRow : null,
                                ]}
                                activeOpacity={0.6}
                                onPress={() => {
                                    const params = {
                                        inspectionData: item,
                                        badge: index === lastItemIndex ? true : false,
                                    };

                                    navigation.navigate('InspectionDetailsScreen', params);
                                }}
                            >
                                <Text style={styles.cell}>
                                    {item.Inspector.firstName} {item.Inspector.lastName}{'\n'}
                                    <Text style={{ color: '#977700' }}>Cin: </Text>{item.Inspector.cin}{'\n'}
                                    <Text style={{ color: '#977700' }}>Tel: </Text>{item.Inspector.phone}
                                </Text>
                                <Text style={[styles.cell, index === lastItemIndex ? styles.lastCell : null]}>
                                    {new Date(item.InspectionDateTime).toLocaleDateString('fr-FR')}{'\n'}
                                    {new Date(item.InspectionDateTime).toLocaleTimeString('fr-FR')}{'\n'}

                                    {index === lastItemIndex && (
                                        <View style={styles.badge}>
                                            <Text style={{ color: 'white', fontSize: 9, fontWeight: 'bold' }}>Dernière inspection</Text>
                                        </View>
                                    )}
                                </Text>

                            </TouchableOpacity>

                        )}
                    />
                </View>
            </ScrollView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF5E0',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 50,
        color: '#977700',

    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredText: {
        fontSize: 16,
        textAlign: 'center',

    },
    tableContainer: {
        borderTopWidth: 0.5,
        borderColor: '#ccc',
        marginTop: 30,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        minHeight: 50,
    },
    headerCell: {
        padding: 10,
        fontWeight: 'bold',
        width: 100,
        flex: 1,
        textAlign: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#ccc',
        borderLeftWidth: 0.5,
        borderLeftColor: '#ccc',
        fontSize: 16,
    },
    cell: {
        padding: 10,
        flex: 1,
        width: 150,
        borderRightWidth: 0.5,
        borderRightColor: '#ccc',
        borderLeftWidth: 0.5,
        borderLeftColor: '#ccc',
        textAlign: 'center',
        fontSize: 15,
    },
    lastTableRow: {
        borderBottomWidth: 2,
    },
    lastCell: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        backgroundColor: "#5188C7",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        zIndex: 1,
    },
    image: {
        width: 240,
        height: 200,

    },

});

export default InspectionsHistoryScreen;
