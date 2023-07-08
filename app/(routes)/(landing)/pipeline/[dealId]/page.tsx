 function getDeal(id: string) {
    if(id === "none") {
        throw new Error('Not a valid deal');
    } else {
        return id;
    }
  }


export default function DealRoute({ params }: { params: { dealId: string } }) {
    const data = getDeal(params.dealId);
    return <div>Deal Page - {params.dealId}</div>
}