import { getAppId } from "./pluginID.cy";

const appId = getAppId()
const customCommandTimeout = 30000
export const comingSoon = (shouldBeComingSoon) => {
    cy.get( `.${ appId }-app-navitem-Settings`, { timeout: customCommandTimeout }).click()

    cy.get('[data-id="coming-soon-toggle"]', { timeout: customCommandTimeout }).as('comingSoonToggle')

    if (shouldBeComingSoon) {
        cy.get('@comingSoonToggle').invoke('attr', 'aria-checked').then(area_checked => {
            if (area_checked == 'false') {
                cy.get('@comingSoonToggle').click()
                cy.get('.nfd-notification--success', { timeout: customCommandTimeout }).should('exist')

            }

        })

    } else {
        cy.get('@comingSoonToggle').invoke('attr', 'aria-checked').then(area_checked => {
            if (area_checked == 'true') {
                cy.get('@comingSoonToggle').click()
                cy.get('.nfd-notification--success', { timeout: customCommandTimeout }).should('exist')

            }

        })

    }
}