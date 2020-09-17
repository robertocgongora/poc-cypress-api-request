import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { boards } from '../../../../support/api/endpoints/boards';

When(/^I create a board "([^"]*)"$/, (boardName) => {
    boards.createBoard(boardName);
});
