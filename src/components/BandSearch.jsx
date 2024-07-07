import { useState } from 'react';
import PropTypes from 'prop-types';

const BandSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search bands..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

BandSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default BandSearch;
