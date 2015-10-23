import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';
// import {Talker} from './Talker.js';

import Conversation from './home/Sub';
import * as _ from 'ramda';


const storageSetter = _.curry(function(key, value){ return localStorage[key] = value });
const storageGetter = _.curry(function(key){return localStorage[key] || "[]"});
// setLocalJSON("Brave New World")({brave: "new world"});
const setLocalJSON = (term) => {return _.compose(storageSetter(term), JSON.stringify)}
const getLocalJSON = _.compose( JSON.parse, storageGetter);


class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="Create A New Convesation">
          <Button onTap={() => this.router().transitionTo('convo')}>
            Start A New Conversation
          </Button>
          <Button onTap={() => this.router().transitionTo('sub')}>
            Histories
          </Button>
        </View>
        {this.props.child()}
      </NestedViewList>
    );
  }
}







export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/