import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import {getArticle} from '../api/articles';
import {getComments} from '../api/comments';
import {Comment} from '../api/types';
import ArticleView from '../components/ArticleView';
import CommentItem from '../components/CommentItem';
import {RootStackParamList} from './types';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;
const ArticleScreen = () => {
  const {params} = useRoute<ArticleScreenRouteProp>();
  const {id} = params;

  const articleQuery = useQuery(['article', id], () => getArticle(id));
  const commentsQuery = useQuery(['comments', id], () => getComments(id));

  const {bottom} = useSafeAreaInsets();

  if (!articleQuery.data || !commentsQuery.data) {
    return (
      <ActivityIndicator size="large" style={styles.spinner} color="black" />
    );
  }

  const {title, body, publishedAt, author} = articleQuery.data.attributes;

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={[styles.flatListContent, {paddingBottom: bottom}]}
      data={commentsQuery.data}
      renderItem={({item}: {item: Comment}) => (
        <CommentItem
          id={item.id}
          message={item.attributes.message}
          publishedAt={item.attributes.publishedAt}
          username={item.attributes.author.data.attributes.username}
        />
      )}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={
        <ArticleView
          title={title}
          body={body}
          publishedAt={publishedAt}
          username={author.data.attributes.username}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  block: {},
  spinner: {
    flex: 1,
  },
  flatList: {
    backgroundColor: 'white',
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
});

export default ArticleScreen;
