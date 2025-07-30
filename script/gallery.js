// Gallery Vue App
const { createApp } = Vue;

const galleryApp = createApp({
    data() {
        return {
            artworks: [],
            loading: true,
            error: null
        }
    },
    methods: {
        async fetchArtworks() {
            try {
                const response = await fetch('api/get_random_artworks.php');
                const result = await response.json();
                if (result.success) {
                    this.artworks = result.data;
                } else {
                    this.error = result.error;
                }
            } catch (error) {
                this.error = 'Failed to fetch artworks';
                console.error('Error:', error);
            } finally {
                this.loading = false;
            }
        },
        addToCart(artwork) {
            // Add cart functionality here
            console.log('Adding to cart:', artwork);
            // You can implement cart storage in localStorage or send to backend
        },
        formatPrice(price) {
            return parseFloat(price).toFixed(2);
        }
    },
    mounted() {
        this.fetchArtworks();
    }
}).mount('#gallery-app');
