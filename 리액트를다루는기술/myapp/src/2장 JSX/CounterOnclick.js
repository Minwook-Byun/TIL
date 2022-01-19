onClick = {() => {
    //this.setState 를 사용해 state에 새로운 값을 넣을 수 있다.
    this.setState({ number : number + 1 });
    this.setState({ number: this.state.number + 1 });
}}

this.setState((prevState, props) => {
    return {
        // 업데이트 하고 싶은 내용 
    }
})

