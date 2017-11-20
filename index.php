<!DOCTYPE>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="stylesheet" href="dist/css/styles.css">
		<title>Title</title>
	</head>
	<body>

		<div class="boilerplate">
			<h1>Gulp boilerplate</h1>
			<p>This boilerplate is based on 2 main features :</p>
			<ol>
				<li>1. Stylus for CSS files</li>
				<li>2. Browserify for JS modules</li>
			</ol>
			<p>It uses ES6 convention for Javascript and has polyfill for older browsers.</p>

			<h2>Installation</h2>
			<ol>
				<li>1. Go to <strong>/gulp</strong> folder and launch <em>npm install</em></li>
				<li>2. When install is done, launch <em>gulp watch</em> to start coding</li>
				<li>3. Once you're done, launch <em>gulp deploy</em> to compress all your files before pushing to production</li>
			</ol>

			<h2>Important</h2>
			<p>If you want to use the live reaload feature, you have to change Browsersync proxy URL inside <strong>/gulp/tasks/browser-syncs.js</strong></p>
			<p>Feel free to change the grid settings inside <strong>/gulp/css/partials/layout/grid</strong> to match your designer PSD layout.</p>
		</div>

		<!-- Dev grid -->
		<?php include('partials/_dev-grid.php'); ?>

		<!-- Scripts -->
		<?php include('partials/_scripts.php'); ?>
		
	</body>
</html>