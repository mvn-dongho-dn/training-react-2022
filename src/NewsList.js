import React from 'react';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: '1',
          img: '#000',
          title: 'This is title 1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          tags: ['david', 'dong']
        },
        {
          id: '2',
          img: '#222',
          title: 'This is title 2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },
        {
          id: '3',
          img: '#444',
          title: 'This is title 3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },
        {
          id: '4',
          img: '#666',
          title: 'This is title 4',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },
        {
          id: '5',
          img: '#888',
          title: 'This is title 5',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        }
      ]
    }
  }

  newItem() {
    const id = Math.floor(Math.random() * 1000);
    const newItem = {
      id: id,
      img: '#888',
      title: `This is title ${id}`,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    };
    return newItem;
  }

  handleAppend = () => {
    const newList = [...this.state.news, this.newItem()];
    this.setState({
      news: newList
    });
  }

  handlePrepend = () => {
    const newList = [this.newItem(), ...this.state.news];
    this.setState({
      news: newList
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleAppend}>Append</button>
        <button onClick={this.handlePrepend}>Prepend</button>
        <ul className="news">
          {this.state.news.map(item => (
            <li>
              <div className="img" style={{background: item.img}}></div>
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.tags && <div className="tags">
                  {item.tags.map((tag, i) => (
                      <span key={i}>{tag} {i < (item.tags.length - 1) ? ',' : ''}</span>
                    ))}
                </div>}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default NewsList;
