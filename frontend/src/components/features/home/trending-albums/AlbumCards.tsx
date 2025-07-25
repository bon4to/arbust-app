import type { Album } from '../../../../types.ts';
import React from 'react';

// Defines that this component expects a prop 'album' with the shape of 'Album'
interface AlbumCardProps {
  album: Album;
}

// Applies the props type
const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    e.currentTarget.src = 'https://placehold.co/300x300/1a1a1a/ffffff?text=Error';
  };

  return (
    <div 
      key={album.id} 
      className="bg-neutral-800 rounded-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-primary/20"
    >
      <img 
        src={album.cover} 
        alt={`Album cover for ${album.title} by ${album.artist}`} 
        className="w-full h-auto aspect-square object-cover" 
        onError={ handleImageError }
      />
      <div className="p-3">
        <h3 className="font-semibold text-white truncate" title={album.title}>{album.title}</h3>
        <p className="text-sm text-neutral-400 truncate" title={album.artist}>{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;