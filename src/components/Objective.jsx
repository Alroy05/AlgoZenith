import React from 'react';
import './Objective.css';
import Fade from 'react-reveal/Fade';

const ObjectiveComponent = () => {
  const objectives = [
    {
      title: 'Objective 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequatur sunt laboriosam voluptatibus est id officia molestiae quibusdam modi ducimus, quos iure eos, assumenda libero saepe placeat amet eaque enim mollitia corrupti porro quas!',
    },
    {
      title: 'Objective 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam quidem animi voluptatem voluptatibus magnam commodi enim quisquam. Fuga quia vel officiis sit tempora doloremque praesentium blanditiis natus dicta, cupiditate repellat odit, nobis architecto.',
    },
    {
      title: 'Objective 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum dolore accusantium corrupti, doloremque totam impedit non aut molestiae explicabo obcaecati optio nemo assumenda dolor placeat ratione deleniti tempora error soluta exercitationem modi? Debitis delectus incidunt consequuntur id ipsam atque molestias! Perferendis, fugit?',
    },
  ];

  return (
    <div className="objective-container" id='objectives'>
        <h1 className="events-title" style={{'fontSize':'2rem','paddingBottom':'5px','fontWeight':500}}>Objectives</h1>
        <Fade bottom>
          <div className="cards-container">
              {objectives.map((objective, index) => (
                <div className="card" key={index}>
                  <h2>{objective.title}</h2>
                  <p>{objective.description}</p>
                </div>
              ))}
          </div>
        </Fade>
    </div>
  );
};

export default ObjectiveComponent;
