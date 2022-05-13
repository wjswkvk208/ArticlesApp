import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';
import Articles from '../components/Articles';

function ArticlesScreen() {
  const {data} = useQuery('articles', getArticles);
  // // const {data2} = data;
  // console.log('ex');
  // console.log(data);
  // console.log('se');
  // // let {data} = data;

  // // console.log('ex');
  // // console.log(data);
  // // console.log('se');

  // // console.log({data2});
  if (!data) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return <Articles data={data.data} meta={data.meta} />;
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
});
export default ArticlesScreen;
