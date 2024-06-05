import React from 'react'
import EpisodeItem from './EpisodeItem';

function EpisodesList({ episodesList }) {
    return (
        <div className='episodes-list'>
            <div className='episodes-list-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    episodesList.map((item, idx) => <EpisodeItem episodeItem={item} key={idx} />)
                }
            </div>
        </div>
    )
}

export default EpisodesList;