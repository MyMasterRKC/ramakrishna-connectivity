
import { useEffect, useState } from "react";
import { DollarSign, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDonations, Donation as DonationData } from "@/hooks/useDonations";

interface DonationHistoryProps {
  userId: string;
}

const DonationHistory = ({ userId }: DonationHistoryProps) => {
  const [donations, setDonations] = useState<DonationData[]>([]);
  const { fetchDonations, isLoading } = useDonations();

  useEffect(() => {
    const getDonations = async () => {
      const donationData = await fetchDonations(userId);
      setDonations(donationData);
    };

    getDonations();
  }, [userId, fetchDonations]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>;
      case "pending":
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>;
      case "failed":
        return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="bg-orange-50">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-orange-600" />
          Donation History
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {isLoading ? (
          <p className="text-center text-gray-600 py-4">Loading donation history...</p>
        ) : donations.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {formatDate(donation.date)}
                  </TableCell>
                  <TableCell>R{donation.amount.toFixed(2)}</TableCell>
                  <TableCell>{donation.paymentMethod}</TableCell>
                  <TableCell>{getStatusBadge(donation.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-10">
            <AlertCircle className="h-12 w-12 text-orange-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No donations yet</h3>
            <p className="text-gray-600">
              Your donation history will appear here once you make your first contribution.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DonationHistory;
