import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {db} from '../db/db';
import {Team_member} from '../models/team_member';
import {Dropdown} from 'react-native-material-dropdown';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input} from 'react-native-elements';
import {OutlinedTextField} from 'react-native-material-textfield';

export default class AddTeammateModal extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitleAlign: 'center',
    };
  };

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      weight: '',
      height: '',
      side_preference: '',
      active: '',
      emergency_cont: '',
    };
  }

  onAdd() {
    if (!this.isEmail(this.state.email)) {
      console.log('email is not correct');
      alert('Email is not correct');
    } else {
      let data = new Team_member(
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.gender,
        this.state.weight,
        this.state.height,
        this.state.side_preference,
        this.state.active,
        this.state.emergency_cont,
      );

      db.insertTeammember(data)
        .then(result => {
          console.log(result);
          this.props.navigation.goBack();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  formatText = text => {
    return text.replace(/[^+\d]/g, '');
  };

  isEmail = email => {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  };
  render() {
    return (
      <ScrollView>
        <OutlinedTextField
          label="Name"
          keyboardType="default"
          onChangeText={name => this.setState({name})}
        />
        <OutlinedTextField
          label="Email"
          keyboardType="email-address"
          onChangeText={email => this.setState({email})}
        />
        <OutlinedTextField
          label="Phone number"
          keyboardType="phone-pad"
          formatText={this.formatText}
          onChangeText={phone => this.setState({phone})}
        />
        <Dropdown
          label="Gender"
          data={[
            {
              value: 'Female',
            },
            {
              value: 'Male',
            },
            {
              value: 'Others',
            },
          ]}
          onChangeText={gender => this.setState({gender})}
        />
        <OutlinedTextField
          label="Weight (lb)"
          keyboardType="numeric"
          formatText={this.formatText}
          onChangeText={weight => this.setState({weight})}
        />
        <OutlinedTextField
          label="Height (cm)"
          keyboardType="numeric"
          formatText={this.formatText}
          onChangeText={height => this.setState({height})}
        />
        <Dropdown
          label="Padding Side Preference"
          data={[
            {
              value: 'Left',
            },
            {
              value: 'Right',
            },
            {
              value: 'Any',
            },
          ]}
          onChangeText={side_preference => this.setState({side_preference})}
        />
        <Dropdown
          label="Status"
          data={[
            {
              value: 'Active',
            },
            {
              value: 'Inactive',
            },
          ]}
          onChangeText={active => this.setState({active})}
        />
        <OutlinedTextField
          label="Emergency Contact"
          keyboardType="phone-pad"
          formatText={this.formatText}
          onChangeText={emergency_cont => this.setState({emergency_cont})}
        />
        <View>
          <Button title="Add" onPress={() => this.onAdd()} />
        </View>
      </ScrollView>
    );
  }
}
