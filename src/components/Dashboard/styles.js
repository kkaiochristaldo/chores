
   import styled from 'styled-components';
    
   export const Container = styled.div`
      display: flex;
      padding: 30px 0;
      height: calc(100vh - 80px);
      overflow: auto;

      ::-webkit-scrollbar {
            height: 10px;
      }

      ::-webkit-scrollbar-track {
         background-color: var(--black-secundary);
      }
      ::-webkit-scrollbar-thumb {
         background-color: var(--purple-primary);
         border-radius: 50px;
      }

   `;
    