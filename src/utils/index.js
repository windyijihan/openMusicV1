const mapDBToAlbumModel = ({
  id,
  name,
  year,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  year,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBTOSongModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  album_id,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBTOSongsModel = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

module.exports = { mapDBToAlbumModel, mapDBTOSongModel, mapDBTOSongsModel };
