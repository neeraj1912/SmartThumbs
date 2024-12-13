"use client";

import React, { useState } from "react";
import { Wallet, CreditCard, ChevronDown, ArrowDownToLine } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const mockTransactions = [
  {
    id: "1",
    date: "2024-03-15",
    type: "Earnings",
    amount: 0.05,
    currency: "ETH",
    status: "Completed",
  },
  {
    id: "2",
    date: "2024-03-10",
    type: "Withdrawal",
    amount: 0.02,
    currency: "ETH",
    status: "Processed",
  },
];

const WalletPage = () => {
  const [balance, setBalance] = useState(1.25);
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const currencies = ["ETH", "USDC", "BTC"];

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      setBalance((prevBalance) => prevBalance - amount);
      setWithdrawDialogOpen(false);
      setWithdrawAmount("");
      // In a real application, you would call an API to process the withdrawal here
      console.log(`Withdrawn ${amount} ${selectedCurrency}`);
    } else {
      console.error("Invalid withdrawal amount");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Wallet Header with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-400/20 to-purple-600/20 opacity-50 blur-xl rounded-xl"></div>
          <div className="relative z-10 flex justify-between items-center p-6 bg-zinc-900/60 backdrop-blur-md rounded-xl border border-zinc-800">
            <div>
              <h1 className="text-3xl font-bold text-purple-500 flex items-center">
                <Wallet className="mr-4 w-8 h-8" />
                Wallet
              </h1>
              <p className="text-zinc-400 mt-2">Manage your earnings </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-zinc-800 text-purple-400 border-purple-600/50 hover:bg-zinc-700"
                >
                  Connect Wallet
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900 border-zinc-800">
                <DialogHeader>
                  <DialogTitle className="text-purple-500">
                    Connect Your Cryptocurrency Wallet
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button
                    variant="outline"
                    className="w-full bg-zinc-800 text-white hover:bg-zinc-700"
                  >
                    MetaMask
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-zinc-800 text-white hover:bg-zinc-700"
                  >
                    WalletConnect
                  </Button>
                  <Separator className="bg-zinc-700" />
                  <p className="text-sm text-zinc-400 text-center">
                    Select a wallet to connect
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Wallet Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-900 border border-zinc-800 mb-6">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400 text-zinc-400"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400 text-zinc-400"
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400 text-zinc-400"
            >
              Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Balance Card */}
              <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-400/10 to-purple-600/10 opacity-50 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-400">Total Balance</span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-purple-400 hover:bg-zinc-800"
                        >
                          {selectedCurrency}{" "}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-zinc-900 border-zinc-800">
                        {currencies.map((currency) => (
                          <DropdownMenuItem
                            key={currency}
                            onSelect={() => setSelectedCurrency(currency)}
                            className="hover:bg-zinc-800 text-white"
                          >
                            {currency}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="text-3xl font-bold text-purple-500">
                    {balance} {selectedCurrency}
                  </div>
                  <p className="text-zinc-400 mt-2">
                    ≈ ${(balance * 3500).toFixed(2)} USD
                  </p>
                  <Button
                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => setWithdrawDialogOpen(true)}
                  >
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Withdraw Earnings
                  </Button>
                </div>
              </div>

              {/* Pending Earnings Card */}
              <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-400/10 to-green-600/10 opacity-50 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-400">Pending Earnings</span>
                    <CreditCard className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-green-500">
                    0.25 {selectedCurrency}
                  </div>
                  <p className="text-zinc-400 mt-2">Ready to Withdraw</p>
                </div>
              </div>

              {/* Total Projects Card */}
              <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/10 to-blue-600/10 opacity-50 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-400">Total Projects</span>
                    <Wallet className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-blue-500">7</div>
                  <p className="text-zinc-400 mt-2">Completed Tasks</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
              <h2 className="text-2xl font-bold text-purple-500 mb-6">
                Transaction History
              </h2>
              <div className="space-y-4">
                {mockTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex justify-between items-center p-4 bg-zinc-800 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-white">
                        {transaction.type}
                      </p>
                      <p className="text-sm text-zinc-400">
                        {transaction.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-500">
                        {transaction.amount} {transaction.currency}
                      </p>
                      <p className="text-sm text-zinc-400">
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
                
          {/* Account Tab */}
          <TabsContent value="account">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
              <h2 className="text-2xl font-bold text-purple-500 mb-6">
                Account Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-400 mb-2">Wallet Address</p>
                    <p className="font-medium text-white">0x1234...5678</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 mb-2">Cryptocurrency</p>
                    <p className="font-medium text-purple-500">
                      {selectedCurrency}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-400 mb-2">Network</p>
                    <p className="font-medium text-white">Ethereum Mainnet</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 mb-2">Verification Status</p>
                    <p className="font-medium text-green-500">Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Withdraw Dialog */}
        <Dialog open={withdrawDialogOpen} onOpenChange={setWithdrawDialogOpen}>
          <DialogContent className="bg-zinc-900 border-zinc-800">
            <DialogHeader>
              <DialogTitle className="text-purple-500">
                Withdraw Earnings
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="col-span-3 bg-zinc-800 border-zinc-700 text-white"
                  placeholder="0.00"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleWithdraw}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Confirm Withdrawal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default WalletPage;
