import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface ArticleViewProp {
  title: string;
  body: string;
  publishedAt: string;
  username: string;
}

const ArticleView = ({title, body, publishedAt, username}: ArticleViewProp) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString();
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <View style={styles.separator} />
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingTop: 24,
    paddingBottom: 64,
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 12,
    marginTop: 16,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: '#546e7a',
  },
  separator: {
    marginTop: 24,
    marginBottom: 24,
    height: 1,
    backgroundColor: '#eeeeee',
  },
});

export default ArticleView;
