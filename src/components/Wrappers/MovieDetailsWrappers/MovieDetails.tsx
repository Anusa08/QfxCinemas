import React, {FC} from 'react';
import MovieDetails from '@screens/movieDetailscreen/movieDetail';
import CustomHeader from '@components/HighOrderComponents/HOCdetails';

/**
 * @author  Anusha Pandey
 * @function @MovieDetailsWrapper
 **/

interface IProps {
  data: any;
  children: any;
  Selection: any;
}

const MovieDetailsWrapper: FC<IProps> = (props: any) => {
  return (
    <>
      <CustomHeader>
        <MovieDetails data={props.route.params} children={undefined} />
      </CustomHeader>
    </>
  );
};

export default MovieDetailsWrapper;