import $ from 'jquery';

class MobileMenu{

  constructor(){

    this.menuIcon = $(".site-header__menu-icon");
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu);
  }

  toggleTheMenu(){
    alert("this is working");
  }
}




export default MobileMenu;
