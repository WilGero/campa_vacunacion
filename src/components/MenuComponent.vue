<template>
    <b-nav card-header tabs>
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item :to="{name:'home'}" exact exact-active-class="active"
              >Inicio</b-nav-item
            >
            <b-nav-item :to="{name:'CampaView'}" exact exact-active-class="active"
              >Campañas</b-nav-item
            >
            <b-nav-item :to="{name:'MapasView'}" exact exact-active-class="active"
              >Mapas</b-nav-item
            >
            <b-nav-item :to="{name:'about'}" exact exact-active-class="active"
              >Acerca de..</b-nav-item
            >
          </b-nav>
</template>

<script>
export default {
    name:'MenuComponent'
}
</script>

<style>

</style>