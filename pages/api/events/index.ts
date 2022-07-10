const Api =  (req : any, res : any) => {
  res.status(200).json([{name : 'John Doe', id : 1}])
}

export default Api;