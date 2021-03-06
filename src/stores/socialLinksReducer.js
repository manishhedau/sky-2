import { createSlice } from '@reduxjs/toolkit'

const initalState = [];


let i = 1;
const socialLinksSlice = createSlice({
    name: "sociallinks",
    initialState: initalState,
    reducers: {
        getSocialLinks: (state, action) => {
            state.push(...action.payload.socialLinks);
        },
        addSocialLinks: (state, action) => {
            console.log(`action : ${i++}`, action);
            // action.payload.socialLink.link = action.payload.link;
            const { link, socialLink, } = action.payload;
            const updatelist = [{
                link: link,
                social_media: socialLink.social_media,
                isActive: socialLink.isActive
            }]
            state.push(...updatelist);
        },
        changeSocialLink: (state, action) => {
            console.log(action);
            const index = state.findIndex((socialLink) => socialLink.social_media === action.payload.socialLink.social_media);
            state[index].link = action.payload.link;

            if (state[index].isActive) {
                state[index].isActive = action.payload.link ? state[index].isActive : false;
            }
        },
        toggleIsActive: (state, action) => {
            const index = state.findIndex((socialLink) => socialLink.social_media === action.payload.socialLink.social_media);
            state[index].isActive = !state[index].isActive;
        },
        removeSocialLink: (state, action) => {

            const index = state.findIndex((socialLink) => socialLink.social_media === action.payload.socialLink.social_media);
            if (index === -1) return;
            state.splice(index, 1);
            // state[index].link = "";
        }
    }
})

export const { getSocialLinks, addSocialLinks, toggleIsActive, changeSocialLink, removeSocialLink } = socialLinksSlice.actions;
export default socialLinksSlice.reducer;