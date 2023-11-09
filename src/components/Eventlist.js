import Event from './Event';

const Eventlist = ({ events }) => {
    return (
        <ul id="event-list">
            {events ?
                events.map(event => <Event key={event.id} event={event} />) : null}
        </ul>
    );
}

export default Eventlist;