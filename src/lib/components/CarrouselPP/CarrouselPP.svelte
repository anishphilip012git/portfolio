<!-- Carousel.svelte -->
<script>
	/**
	 * @type {string | any[]}
	 */
	 export let profilePics = []; // accepts an array of profile pictures
	let currentIndex = 0;
  
	function nextPic() {
	  currentIndex = (currentIndex + 1) % profilePics.length;
	}
  
	function prevPic() {
	  currentIndex = (currentIndex - 1 + profilePics.length) % profilePics.length;
	}
  
	import { onMount, onDestroy } from 'svelte';
	import UIcon from '../Icon/UIcon.svelte';
  
	/**
	 * @type {number | undefined}
	 */
	let interval;
	onMount(() => {
	  interval = setInterval(nextPic, 5000); // Change image every 3 seconds
	});
  
	onDestroy(() => {
	  clearInterval(interval); // Cleanup the interval on component destroy
	});
  </script>
  
  <div class="carousel flex-[0.5] row-center">
	<!-- <button on:click={prevPic}>
		<UIcon icon="i-carbon-chevron-left" />
	</button> -->
	<img src={profilePics[currentIndex]} alt="Profile Picture" class="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover" />
	<!-- <button on:click={prevPic}>Previous</button>
	<button on:click={nextPic}>Next</button> -->
	<!-- <button on:click={nextPic}>
		<UIcon icon="i-carbon-chevron-right" />
	</button> -->
  </div>
  
  <style>
	.carousel {
	  position: relative;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	button {
	  position: absolute;
	  top: 50%;
	  transform: translateY(-50%);
	  background-color: #fff;
	  border: none;
	  cursor: pointer;
	}
	button:hover {
	  background-color: #eee;
	}
	button:first-of-type {
	  left: 10px;
	}
	button:last-of-type {
	  right: 10px;
	}
  </style>
  