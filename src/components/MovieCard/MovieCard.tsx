import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/styles/colors';

export type RootStackParamList = {
  MovieDetailsWrapper: {
    showID: number;
    title: string;
    urlToImage: string;
    eventRating: string;
    genre: string;
    director: string;
    cast: string;
    mediaPlayerTrailerURL: string;
    annotation: string;
    showLengthInMinutes: number;
    companyId: number;
    theatreName: string;
    city: string;
    theatreID: number;
    showDate: string;
    eventID: number;
  };
};

interface IProps {
  showID: number;
  urlToImage: string;
  title: string;
  eventRating: string;
  genre: string;
  mediaPlayerTrailerURL: string;
  annotation: string;
  showLengthInMinutes: number;
  director: string;
  cast: string;
  companyId: number;
  theatreName: string;
  city: string;
  theatreID: number;
  showDate: string;
  eventID: number;
}

/**
 * @author Anusha Pandey
 * @function @MovieCard
 **/


const MovieCard: FC<IProps> = ({
  showID,
  title,
  genre,
  urlToImage,
  eventRating,
  mediaPlayerTrailerURL,
  annotation,
  showLengthInMinutes,
  director,
  companyId,
  theatreName,
  city,
  cast,
  theatreID,
  showDate,
  eventID,
}) => {
  const {
    container,
    image,
    movieTitle,
    rating,
    imageContainer,
    movieInfo,
  } = styles;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleOnPress = () => {
    return navigation.navigate('MovieDetailsWrapper', {
      showID,
      title,
      urlToImage,
      eventRating,
      mediaPlayerTrailerURL,
      annotation,
      showLengthInMinutes,
      director,
      cast,
      genre,
      companyId,
      theatreName,
      city,
      theatreID,
      showDate,
      eventID,
    });
  };
 
  return (
    <SafeAreaView style={container}>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={imageContainer}>
          <Image style={image} source={{uri: urlToImage}} />
        </View>
        <View style={movieInfo}>
          <Text style={movieTitle}>{title}</Text>
          <Text style={rating}>({eventRating})</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    height: 200,
    marginLeft: 10,
  },
  image: {
    width: 175,
    height: 200,
  },
  movieInfo: {
    marginLeft: 5,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left',
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: 10,
  },
  rating: {
    marginRight: 15,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: 10,
  }
});

export default MovieCard;