<template>
    <div :id="this.idData" >{{ this.textData }}</div>
</template>

<script>

export default {
    name: 'btnComponent',
	props: ['id','text'],
    data() {
        return {
            textData: this.text,
            idData: this.id
        }
    }
}
</script>
