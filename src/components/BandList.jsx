import PropTypes from 'prop-types';

const BandList = ({ bands, onBandClick }) => {
    return (
        <ul>
            {bands.map((band) => (
                <li key={band.id} onClick={() => onBandClick(band.id)}>
                    {band.name} - {band.genre}
                </li>
            ))}
        </ul>
    );
};

BandList.propTypes = {
    bands: PropTypes.array.isRequired,
    onBandClick: PropTypes.func.isRequired,
};

export default BandList;
