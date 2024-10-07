import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const localizer = momentLocalizer(moment);

function App() {
  const [events, setEvents] = useState([
    {
      title: "Cleaning Office 1",
      start: new Date(2023, 9, 1), // Use a static date (October 1, 2023)
      end: new Date(2023, 9, 1),   // Use a static date
    },
  ]);
  

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter event title');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div style={{ height: 700, margin: '50px' }}>
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          onSelectSlot={handleSelectSlot}
        />
    </div>
  );
}

export default App;
