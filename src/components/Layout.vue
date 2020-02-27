<template>
  <div>
    <mdb-navbar style="padding-top:5px;padding-bottom:5px;" dark color="mdb-color" class="darken-3" :toggler="false">
      <mdb-navbar-nav left>
        <mdb-icon icon="bars" size="2x" @click.native="toggle = !toggle" />
      </mdb-navbar-nav>
    </mdb-navbar>
    <!--/.Navbar-->
    <div class="mdb-skin">
      <mdb-side-nav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" sideNavClass="sn-bg-4" mask="dark" :OpenedFromOutside.sync="toggle" hidden sideNavStyle="padding-top: 10px" >
        <ul>
          <li>
            <mdb-side-nav-nav>
              <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
                <mdb-side-nav-item href="#">Submit listing</mdb-side-nav-item>
                <mdb-side-nav-item href="#">Registration form</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-cat name="Instruction" far icon="hand-pointer">
                <mdb-side-nav-item href="#">For bloggers</mdb-side-nav-item>
                <mdb-side-nav-item href="#">For authors</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-cat name="About" icon="eye">
                <mdb-side-nav-item href="#">Introduction</mdb-side-nav-item>
                <mdb-side-nav-item href="#">Monthly meetings</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-cat name="Contact me" far icon="envelope">
                <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
                <mdb-side-nav-item href="#">Write a message</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-item header icon="envelope" href="#">Write a message</mdb-side-nav-item>
              <mdb-side-nav-item header icon="user" href="#" @click.native="toggleSideNav('A')" >Profile</mdb-side-nav-item>
              <mdb-side-nav-item header icon="cubes" href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro" target="_blank" >Official docs</mdb-side-nav-item>
            </mdb-side-nav-nav>
          </li>
        </ul>
      </mdb-side-nav>
    </div>
    <div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <mdb-footer color="stylish-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright:
        <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue">EncoderPy</a>
      </p>
    </mdb-footer>
  </div>
</template>

<script>
  import Component, { mixins } from "vue-class-component";
  import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbInput, mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbIcon, waves, mdbFooter} from "mdbvue";

  @Component({
      components: {
        mdbNavbar,
        mdbNavItem,
        mdbNavbarNav,
        mdbInput,
        mdbSideNav,
        mdbSideNavNav,
        mdbSideNavCat,
        mdbSideNavItem,
        mdbIcon,
        mdbFooter
      }
    })
  export default class Layout extends mixins(waves)  {
    toggle = false
  };

</script>

<style scoped>
  .view {
    background: url("https://mdbootstrap.com/img/Photos/Others/img (40).jpg")
      no-repeat center center;
    background-size: cover;
    height: 100%;
  }

  .navbar i {
    cursor: pointer;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease-out;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
