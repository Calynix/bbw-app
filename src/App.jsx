import { useState, useEffect } from 'react';
import BandById from './components/BandByID';
import BandList from './components/BandList';
import BandSearch from './components/BandSearch';
import LoadingSpinner from './components/LoadingSpinner';

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

const App = () => {
    const [bands, setBands] = useState([]);
    const [selectedBandId, setSelectedBandId] = useState(null);
    const [bandInfo, setBandInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBands = async () => {
            try {
                setLoading(true);
                // Simulate fetching bands
                setBands(staticBandData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchBands();
    }, []);

    const handleBandClick = async (bandId) => {
        try {
            setLoading(true);
            // Simulate fetching band by ID
            const band = staticBandData.find(b => b.id === bandId);
            setBandInfo(band);
            setSelectedBandId(bandId);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const handleSearch = async (searchTerm) => {
        try {
            setLoading(true);
            // Simulate searching for bands
            const filteredBands = staticBandData.filter(band =>
                band.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setBands(filteredBands);
            setSelectedBandId(null);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Music WebApp</h1>
            <BandSearch onSearch={handleSearch} />
            <BandList bands={bands} onBandClick={handleBandClick} />
            {selectedBandId && <BandById bandId={selectedBandId} bandInfo={bandInfo} />}
        </div>
    );
};

export default App;
