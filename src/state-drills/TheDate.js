import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foo: 'foo',
            hello: 'Hello, world',
            list: [1,2,3],
            obj: {nest:'object', yes:true}
        }
    }
    render() {
        return <div />
    }
}

export default TheDate