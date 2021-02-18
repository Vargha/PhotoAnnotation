import {Component} from "react/cjs/react.production.min";
import Annotation from "react-image-annotation/lib/components/Annotation";
// https://www.npmjs.com/package/react-image-annotation/v/0.9.10

export default class Simple extends Component {
  state = {
    annotations: [],
    annotation: {}
  }

  onChange = (annotation) => {
    this.setState({ annotation })
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    });
    console.log(this.state.annotations);
  }

  render () {
    const img = 'photos/testCat1.png';
    return (
      <div className='twoColumnsContainer'>
        <div style={{width: 500, height: 500}}>
          <Annotation
            src={img}
            alt='Kitty is cool!'

            annotations={this.state.annotations}

            type={this.state.type}
            value={this.state.annotation}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>

        <div>
          <ul>
            {this.state.annotations.map(a =>
              <li className='listItem'>
                <div>{a.data.text}</div>
                <button onClick={() => {
                  const annotationsAfterRemove = this.state.annotations.filter(b => b.data.id !== a.data.id);
                  this.setState({
                    annotation: {},
                    annotations: annotationsAfterRemove
                  });
                }}>Remove</button>
            </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
