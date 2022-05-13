import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Article, ArticlesResponse} from '../api/types';
import ArticleItem from './ArticleItem';

// export interface ArticlesProps {
//   articles: ArticlePost[];
// }

const Articles = ({data}: ArticlesResponse) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}: {item: Article}) => (
        <ArticleItem
          id={item.id}
          title={item.attributes.title}
          publishedAt={item.attributes.publishedAt}
          username={item.attributes.author.data.attributes.username}
        />
      )}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      ListFooterComponent={() =>
        data.length > 0 ? <View style={styles.seperator} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#cfd8dc',
  },
});
export default Articles;
