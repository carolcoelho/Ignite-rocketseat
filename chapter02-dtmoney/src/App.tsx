import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global'
import { Dashbord } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/UseTransactions'



Modal.setAppElement('#root');
function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)



  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true)
  }
  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false)
  }


  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
      <Dashbord />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />


    </TransactionsProvider>
  );
}

export default App;
