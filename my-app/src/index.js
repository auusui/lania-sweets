import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.png';
import dragonfly from './dragonFly.png';
import instagram from './instagram.JPG';
import { Container, Button, Header, Menu, Dropdown, Icon, Grid, List, Image, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image size="mini" src={dragonfly}/>
              <span className="header-name" style={{ fontWeight: 800, fontSize: '24px'}}>Lānia Sweets Bakery</span>
            </Menu.Item>
            <Menu.Item position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item>
              <Button icon OnClick="window.location.href={instagram}">
                <Icon name='instagram'/>
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Input
                  icon={{ name: 'search', circular: true, link: true }}
                  placeholder='Search...'>
              </Input>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class LaniaLogo extends React.Component {
  render() {
    return (
        <Image size="medium" centered src={logo}/>
    )
  }
}

class MiddleMenu extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
        <Menu position='center' inverted borderless className="middlemenu">
          <Dropdown item text="Sweets"
                    name='special'
                    active={activeItem === 'sweets'}
                    onClick={this.handleItemClick}>
            <Dropdown.Menu>
              <Dropdown.Item>Scones</Dropdown.Item>
              <Dropdown.Item>Pies</Dropdown.Item>
              <Dropdown.Item>Chocolates</Dropdown.Item>
              <Dropdown.Item>Cookies</Dropdown.Item>
              <Dropdown.Item>Muffins/Cupcakes</Dropdown.Item>
              <Dropdown.Item>Doughs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Special Sweets"
                    name='special'
                    active={activeItem === 'special'}
                    onClick={this.handleItemClick}>
            <Dropdown.Menu>
              <Dropdown.Item>Gluten-Free</Dropdown.Item>
              <Dropdown.Item>Refined Sugar-Free</Dropdown.Item>
              <Dropdown.Item>Vegan</Dropdown.Item>
              <Dropdown.Item>Make Your Own</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name='promotions'
            active={activeItem === 'promotions'}
            onClick={this.handleItemClick}/>
          <Menu.Item
              name='my story'
              active={activeItem === 'my story'}
              onClick={this.handleItemClick}/>
          <Menu.Item
              name='contact us'
              active={activeItem === 'contact us'}
              onClick={this.handleItemClick}/>
        </Menu>
    )
  }
}

class MiddleContents extends React.Component {
  render() {
    return (
      <div className="middle-contents">
        <Header as="h1" size="large">My treats will lānia your heart and stomach</Header>
      </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
        <Grid container>
          <Grid.Row columns="one" centered>
            <List>
              <List.Item>(c) 2020 Lānia Sweets</List.Item>
              <List.Item>Treats made by Aubrie Usui</List.Item>
              <List.Item>Baked with Love</List.Item>
            </List>
          </Grid.Row>
        </Grid>
        </div>
    )
  }
}

class LaniaSweets extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <LaniaLogo/>
          <MiddleMenu/>
          <MiddleContents/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<LaniaSweets/>, document.getElementById('root'));


