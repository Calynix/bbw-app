import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

const staticBandData = [
    {
        id: 4176,
        name: "Visions of Atlantis",
        description: "This is an Visions of Atlantis.",
        formed_in: 2007,
        genre: "Metal",
        albums: [
            { id: 1, title: "First Album", release_year: 2008 },
            { id: 2, title: "Second Album", release_year: 2012 }
        ],
        members: [
            { id: 101, name: "I didn't want to be a full stack dev anyway", role: "Lead Vocals" },
            { id: 102, name: "Burn JS", role: "Guitar" },
            { id: 103, name: "I hate Frontend", role: "Bass" },
            { id: 104, name: "I give up", role: "Drums" }
        ]
    }
];

const BandById = ({ bandId }) => {
    const [bandInfo, setBandInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBandById = async () => {
            try {
                setLoading(true);
                // Simulate fetching band by ID
                const band = staticBandData.find(b => b.id === bandId);
                setBandInfo(band);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching band data:', error);
                setLoading(false);
            }
        };

        fetchBandById();
    }, [bandId]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!bandInfo) {
        return <div>No band found for ID {bandId}</div>;
    }

    return (
        <div>
            <h2>{bandInfo.name}</h2>
            <p>Genre: {bandInfo.genre}</p>
            <p>Formed in: {bandInfo.formed_in}</p>
            {/* Additional band details can be added here */}
        </div>
    );
};

BandById.propTypes = {
    bandId: PropTypes.number.isRequired,
};

export default BandById;
