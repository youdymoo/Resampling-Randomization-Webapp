$(document).ready(function(){
	(function($){
	
	
			$("#input-table").inputtable({
			    rows: 5,
			    cols: 3,
				minSpareCols : 1,
				minSpareRows : 1,
				fillHandle : true,
				rowHeaders : true,
				colHeaders : true,
				legend: [
			  /**
			   * Legend 1
			   */
				{
				  match: function (row, col, data) {
					return (row === 0); //if it is first row
				  },
				  style: {
					color: 'green', //make the text green and bold
					fontWeight: 'bold'
				  },
				  title: 'Heading', //make some tooltip
				  readOnly: true //make it read-only
				},

			  /**
			   * Legend 2
			   */
				{
				  match: function (row, col, data) {
					return !(data()[row][col]); //if the cell is empty
				  },
				  style: {
					background: '#f5f5f5' //make the background yellow
				  }
				}
				]
			});
			
<<<<<<< .merge_file_a07384
			$('#input-table').after("<input class='btn' type='button' value='Done'><input calss='btn' type='button' value='Reset'>");
			$("input[value='Done!']").on('click',function(){
=======
<<<<<<< HEAD
			$('#input-table').after("<input class='btn' type='button' value='Done'><input calss='btn' type='button' value='Reset'>");
			$("input[value='Done!']").on('click',function(){
=======
			$('#input-table').after("<br/><br/><input class='btn' type='button' value='Done'><input class='btn' type='button' value='Reset'><input class='btn' type='button' value='Show/Hide'>");
			$("input[value='Done']").on('click',function(){
>>>>>>> refactoring code
>>>>>>> .merge_file_a06204
			console.log($("#input-table").inputtable('getData'));
				$('#input-table').after('Please check your console for the array');
				return false;
			});
			$("input[value='Reset']").on('click',function(){
				$("#input-table").inputtable('clear');
				return false;
			});
<<<<<<< .merge_file_a07384
=======
<<<<<<< HEAD
=======
			$("input[value='Show/Hide']").on('click',function(){
				alert('working on it');
				
				return false;
			});
>>>>>>> refactoring code
>>>>>>> .merge_file_a06204
			
		
		
	})(jQuery);
})