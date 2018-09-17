import React from 'react'
import { connect } from 'react-redux'
import { Card, CardTitle, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
    cardTitle: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    cardMedia: {
        maxHeight: 394,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        height: 400,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%'
    }
};

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseOver: false
        }
    }

    render() {
        const { movie } = this.props;
        const subtitle = this.state.isMouseOver ? movie.overview : null;
        const newTo = {
            pathname: "/detail",
            movie : movie,
        };

        return (

            <Link to={newTo}>
            <Card
                style={styles.card}
                onMouseOver={() => this.setState({isMouseOver: true})}
                onMouseLeave={() => this.setState({isMouseOver: false})}
                // onClick={() => console.log('clicked')}
            >
                <CardMedia
                    style={styles.cardMedia}
                    overlay={
                        <CardTitle
                            title={movie.title}
                            subtitle={subtitle}
                        />
                    }
                >

                        <img style={styles.bgImage} src={movie.poster_path} />

                </CardMedia>
            </Card>
            </Link>
        );
    }
}

export default MovieCard;