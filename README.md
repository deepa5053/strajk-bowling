The Shoes component should render without crashing.
The component should display the correct number of shoe input fields based on the provided list of shoes.
Each shoe input field should display the correct size corresponding to the provided list of shoes.

The test suite should ensure that the heading "When, What & Who" is rendered.
It should verify that all input fields are generated, including date, time, number of bowlers, and number of lanes.
The input fields should have the correct types (date, time, number, number respectively).


The test should ensure that the user can successfully remove shoes after they have been added.
When the user clicks on the removal button associated with a pair of shoes, the shoes should be removed from the list.
The test should ensure that the user can successfully make a reservation after filling all input fields correctly.
After confirming the booking, the user should be redirected to a confirmation page where the price and booking ID are displayed.
The test should confirm that the return button on the confirmation page navigates the user back to the booking page.
Additionally, there should be tests to verify that the user cannot make a reservation if any of the input fields (date, time, bowlers, lanes) are empty.
Tests should also check if the user cannot make a reservation if the number of players exceeds the maximum amount per lane and if the number of players doesn't match the number of shoes added
