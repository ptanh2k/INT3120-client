const getTopSongs = songs => {
  songs.sort((firstItem, secondItem) => secondItem.views - firstItem.views);
  return songs.slice(0, 6);
};

export default {getTopSongs};
