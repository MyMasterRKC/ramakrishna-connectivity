
import { useState } from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface UserData {
  id: string;
  name: string;
  email: string;
}

interface UserProfileProps {
  user: UserData;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = async () => {
    try {
      // In a real app, this would update the user profile via API
      // const response = await fetch(`${API_URL}/user/profile`, {
      //   method: 'PUT',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ name, email })
      // });
      
      // For now, we'll just show a success message
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <Card>
      <CardHeader className="bg-orange-50">
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-orange-600" />
          My Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            {isEditing ? (
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              <p className="text-gray-800 font-medium p-2 bg-gray-50 rounded">{user.name}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            {isEditing ? (
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <p className="text-gray-800 font-medium p-2 bg-gray-50 rounded">{user.email}</p>
            )}
          </div>
          
          <div className="flex justify-end">
            {isEditing ? (
              <div className="space-x-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700" onClick={handleSave}>
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                className="border-orange-300 text-orange-700 hover:bg-orange-50"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
