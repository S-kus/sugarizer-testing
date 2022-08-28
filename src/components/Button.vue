<template>
    <div v-html="genTextData" :id="this.id"></div>
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
    },
    computed: {
		genTextData: function() {
           return this._setTextData(this.idData, this.textData);
        }
    },
    watch: {
		textData: function(newText) {
			this._setTextData(this.idData, newText);
		},   
    },
    methods: {
        _setTextData(icon, text) {
            setTimeout(function() { // HACK: Timeout need to wait for SVG to be build
                let element = document.getElementById(icon);
                if (element) {
                    element.innerHTML=text;
                }
            }, 0);
        }
    }
}
</script>
