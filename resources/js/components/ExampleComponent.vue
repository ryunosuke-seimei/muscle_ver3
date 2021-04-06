<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
@media screen and (min-width:480px) {
  *{
    background-color: red;
  }
}
@media screen and (min-width:768px) and ( max-width:1024px) {
  *{
    background-color: blue;
  }
}
@media screen and (min-width:1024px) {
  *{
    background-color: yellow;
  }
}
</style>
