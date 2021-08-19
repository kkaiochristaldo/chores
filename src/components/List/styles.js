
    import styled from 'styled-components';
    
    export const Container = styled.div`
        padding: 0 15px;
        height: 100%;
        flex: 0 0 320px; 
        & + div {
            border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 42px;

            h2 {
                font-weight: 500;
                font-size: 16px;
                padding: 0 10px;
            }

            button {
                width: 42px;
                height: 42px;
                border-radius: 18px;
                background-color: var(--purple-primary);
                border: 0;
                cursor: pointer;
            }
        }
        
        ul {
            height: calc(100% - 42px);
            margin-top: 30px;  
            overflow: auto;      

            ::-webkit-scrollbar {
            width: 2px;
            }

            ::-webkit-scrollbar-track {
                background-color: var(--black-secundary);
            }
            ::-webkit-scrollbar-thumb {
                background-color: var(--purple-primary);
                border-radius: 50px;
            }

        }
    `;
    