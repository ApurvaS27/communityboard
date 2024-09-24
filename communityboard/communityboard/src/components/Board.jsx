import React from 'react';
import Card from './Card';
import './Board.css';

const events = [
  { id: 1, title: 'React Workshop', date: '2024-09-30', description: 'Learn the basics of React.' },
  { id: 2, title: 'JavaScript Meetup', date: '2024-10-05', description: 'Networking for JavaScript devs.' },
  { id: 3, title: 'Web Dev Bootcamp', date: '2024-10-10', description: 'Beginner-friendly web dev training.' },
  { id: 4, title: 'Python Crash Course', date: '2024-10-15', description: 'Introduction to Python programming.' },
  { id: 5, title: 'CSS Design Challenge', date: '2024-10-20', description: 'Test your CSS skills.' },
  { id: 6, title: 'AI & Machine Learning', date: '2024-10-25', description: 'Talk on AI advancements.' },
  { id: 7, title: 'Cloud Computing 101', date: '2024-11-01', description: 'Overview of cloud services.' },
  { id: 8, title: 'Data Structures', date: '2024-11-05', description: 'Workshop on data structures.' },
  { id: 9, title: 'API Development', date: '2024-11-10', description: 'Learn to build REST APIs.' },
  { id: 10, title: 'Networking in Tech', date: '2024-11-15', description: 'Build connections in tech.' },
];

function Board() {
  return (
    <div className="board">
      {events.map(event => (
        <Card key={event.id} title={event.title} date={event.date} description={event.description} />
      ))}
    </div>
  );
}

export default Board;
