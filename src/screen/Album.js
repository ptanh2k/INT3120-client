import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {Card} from 'react-native-elements';

const data = [
  {
    imageUrl:
      'https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2021/ycgvptcc/2020_08_18/a3_nzbt.jpg',
    title: 'something',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something two',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something three',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something four',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something five',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something six',
  },
];

const Album = () => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({item: rowData}) => {
        return (
          <Card
            title={null}
            image={{uri: data.imageUrl}}
            containerStyle={{padding: 0, width: 200, height: 200}}>
            <Text style={{marginBottom: 10}}>{rowData.title}</Text>
          </Card>
        );
      }}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Album;
